export default class Workout {

  constructor(public name: string, private _reps: number) {}

  get reps(){
   return this._reps 
  }

  set reps(reps: number){
    this._reps = reps >= 0 ? reps : 0
    // if( reps >= 0 ) {
    //   this._reps = reps
    // } else this._reps = 0
  }
}
