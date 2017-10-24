export interface CalendarCellModel {
  cellNumber: number; // used to give id number to each cell so I can figure out which one was filled (start from 0 to 41)
  cellClasses: any; // all classes cell contains ['active-month', 'inactive-month', 'booking-open', 'booking-closed']
  disabled: boolean; // will use this boolean to disable cells outside of the current month
  booked: boolean; // will use this one to disable already booked cells
  cellDate: string; // going to store dates in this one so I can make bookings
}
