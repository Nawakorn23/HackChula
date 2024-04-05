const Auditorium = require("../models/Auditorium");

// @desc        Get all auditoriums;
// @routes      Get /api/auditoriums
// @access      Public
exports.getAuditoriums = async (req, res, next) => {
  try {
    let query;

    //Copy req.query
    const reqQuery = { ...req.query };

    //Fields to exclude
    const removeFields = ["select", "sort", "page", "limit"];

    //Loop over remove fields and delete them from reqQuery
    removeFields.forEach((param) => delete reqQuery[param]);

    //Create query string
    let queryStr = JSON.stringify(reqQuery);

    //Create operators {$gt, $gte, etc}
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`
    );

    //finding resource
    query = Auditorium.find(JSON.parse(queryStr)).populate("reservations");

    //Select Feilds
    if (req.query.select) {
      const fields = req.query.select.split(",").join(" ");
      query = query.select(fields);
    }

    //Sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    //Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 25;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Auditorium.countDocuments();

    query = query.skip(startIndex).limit(limit);

    //Executing query
    const auditoriums = await query;

    //Pagination query
    const pagination = {};
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit,
      };
    }
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit,
      };
    }

    res.status(200).json({
      success: true,
      count: auditoriums.length,
      pagination,
      data: auditoriums,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};


// @desc        Get single auditorium
// @routes      GET /api/auditoriums/:id
// @access      Public
exports.getAuditorium = async (req, res, next) => {
  try {
    const auditorium = await Auditorium.findById(req.params.id);

    if (!auditorium) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: auditorium
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc        Create a auditorium
// @routes      POST /api/auditoriums
// @access      Private
exports.createAuditorium = async (req, res, next) => {
  // console.log(req.body);
  const auditorium = await Auditorium.create(req.body);
  res.status(201).json({ success: true, data: auditorium });
};

// @desc        Update single auditorium
// @routes      PUT /api/auditoriums/:id
// @access      Private
exports.updateAuditorium = async (req, res, next) => {
  try {
    const auditorium = await Auditorium.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!auditorium) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: auditorium,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc        Delete single auditorium
// @routes      DELETE /api/auditoriums/:id
// @access      Private
exports.deleteAuditorium = async (req, res, next) => {
  try {
    const auditorium = await Auditorium.findById(req.params.id);

    if (!auditorium) {
      return res.status(400).json({
        success: false,
        message: `Bootcamp not found with id of ${req.params.id}`,
      });
    }

    await auditorium.deleteOne();
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
