const timeout = (delay: number) => {
  return new Promise((res) => setTimeout(res, delay));
};

export const delayFooterAppearance = async (
  setShowFooter: (boolean: boolean) => void
) => {
  await timeout(1000);
  setShowFooter(true);
};
