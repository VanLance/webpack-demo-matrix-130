import Routine, { Workouts } from './Routine';
import Workout from './Workout';

class LegDay extends Routine {
  public workouts: Workouts = {};
  constructor(public name: string, public workoutArray: Array<Workout>) {
    super(name, workoutArray);
    workoutArray.map(
      (workout: Workout) => (this.workouts[workout.name] = workout)
    );
  }
}

class Insanity extends Routine {
  static workouts: Array<Workout> = [
    new Workout('burpees', 25),
    new Workout('bearCrawls', 3),
    new Workout('mountainClimbers', 15),
    new Workout('lunges', 20),
  ];
}

class BoulderingTraining extends Routine {
  constructor(
    name: string = 'Bouldering Training',
    workoutArray: Workout[] = [
      new Workout('pullups', 10),
      new Workout('max-deadhang', 3),
      new Workout('max-hangboard-pinch', 3),
      new Workout('max-hangboard-crimp', 3),
      new Workout('splitsquats', 10),
      new Workout('dips', 10),
    ]
  ) {
    super(name, workoutArray);
  }
}

class Pull extends Routine {
  constructor() {
    super('Pull Day', [
      //biceps
      new Workout('25lb Curls', 8),
      new Workout('20lb Hammer Curls', 8),
      new Workout('30lbs - 7-7-7', 2),
      //back
      new Workout('85lb Lat pull downs', 8),
      new Workout('30lb cross-body cable pull-down', 8),
      new Workout('30lb single-arm cable rows', 8),
    ]);
  }
}

// const legDay = new LegDay('Leg Day', [
//   new Workout('Bulgarian Split Squats', 40),
//   new Workout('Leg Curls', 20),
//   new Workout('Calf Raises', 50),
//   new Workout('Hip Thrusts', 80),
// ]);

// const routine = new Routine('plyo', [
//   new Workout('pushups',25),
//   new Workout('pullups',3),
//   new Workout('situps', 15),
//   new Workout('sprints', 5)
// ])


export { LegDay, Pull, BoulderingTraining, Insanity };
