import React, { useEffect } from 'react';
const worker = new Worker('../worker/worker.js');

const ChildComponent = ({ text }) => {
  let a = 'Prettier setup';

  const postMessageWorker = (worker, message) =>
    new Promise(resolve => {
      const resolution = event => {
        worker.removeEventListener('message', resolution);
        resolve(event.data);
      };
      worker.addEventListener('message', resolution);
      worker.postMessage(message);
    });

  const workerMessageHandler = workerEvent => {
    console.log(workerEvent.data);
  };

  const sendWorkerMessage = () => {
    console.log('SENT');
    postMessageWorker(worker, 'async promise event').then(data => console.log(data, 'from async'));
  };

  useEffect(() => {
    console.log('created!');
    worker.postMessage('message to worker!');
    worker.addEventListener('message', workerMessageHandler);
    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <div>
      <h2>Child component indeed! {a}</h2>
      <h4>Text prop: {text}</h4>
      <button onClick={sendWorkerMessage}>emit worker event</button>
    </div>
  );
};

export default ChildComponent;
