const history = require("../models/History");

// @desc        Get all historys;
// @routes      Get /api/historys
// @access      Public
exports.getHistorys = async (req, res, next) => {
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
        query = history.find(JSON.parse(queryStr)).populate("historys");
    
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
        const total = await Room.countDocuments();
    
        query = query.skip(startIndex).limit(limit);
    
        //Executing query
        const historys = await query;
    
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
          count: historys.length,
          pagination,
          data: historys,
        });
      } catch (err) {
        res.status(400).json({
          success: false,
        });
      }
};

// @desc        Get single history
// @routes      GET /api/historys/:id
// @access      Public
exports.getHistory = async (req, res, next) => {
  try {
    const history = await history.findById(req.params.id);

    if (!history) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: history
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc        Create a history
// @routes      POST /api/historys
// @access      Private
exports.createHistory = async (req, res, next) => {
  // console.log(req.body);
  const history = await history.create(req.body);
  res.status(201).json({ success: true, data: history });
};

// @desc        Update single history
// @routes      PUT /api/historys/:id
// @access      Private
exports.updateHistory = async (req, res, next) => {
  try {
    const history = await history.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!history) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: history,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//desc    Delete history
//route   DELETE /api/historys/:Id
//access  Private
exports.deleteHistory = async (req, res, next) => {
  try {
    const history = await history.findById(req.params.id);

    if (!history) {
      return res.status(404).json({
        success: false,
        message: `No history with the id of ${req.params.id}`,
      });
    }

    // Make sure user is the history owner
    if (
      history.user.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(401).json({
        success: false,
        message: `User ${req.user.id} is not authorized to delete this history`,
      });
    }

    await history.deleteOne();

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json({
      success: false,
      message: "Cannot delete history",
    });
  }
};
