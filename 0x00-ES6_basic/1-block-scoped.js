export default function taskBlock(trueOrFalse) {
  let task;
  let task2;

  if (trueOrFalse || true) {
    task = false;
    task2 = true;
  }

  return [task, task2];
}
