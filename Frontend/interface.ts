export interface CoworkingItem {
    _id: string,
    name: string,
    address: string,
    tel: string,
    openTime:string,
    closeTime:string,
    __v: number,
    id: string,
    type : string,
    picture : string,
  }
  
export interface CoworkingJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CoworkingItem[]
}

export interface ReservationItem {
  reserveDate: string,
  reserveDateStart: string,
  reserveDateEnd: string,
  user: string,
  coworking: string
}

export interface ReservationItem2 {
  _id: string,
  reserveDate: string,
  reserveDateStart: string,
  reserveDateEnd: string,
  user: string
  coworking: {
                _id: string
                name: string
                tel: string
                id: string
              }|null
  createAt: string
  __v: string
}

export interface ReserveJson {
  success: boolean,
  count: number, 
  data: ReservationItem2[]
}


export interface UserItem {
  _id: string,
  name: string,
  email: string,
  role: string,
  password: string,
  createAt: string
}

export interface UserJson {
  success: boolean,
  count: number, 
  data: UserItem[]
}
