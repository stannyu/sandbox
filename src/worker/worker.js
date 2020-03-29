const mainWorkerCallback = workerEvent => {
  console.log(workerEvent.data);
  setTimeout(() => {
    self.postMessage('message FROM worker!');
  }, 1000);
};

self.addEventListener('message', mainWorkerCallback);
