export const showConnLostMessage = (msg: string) => {
  console.info(`%c${msg}`, "color:red");
};

export const showConnRestoMessage = (msg: string) => {
  console.info(`%c${msg}`, "color:lightblue");
};
