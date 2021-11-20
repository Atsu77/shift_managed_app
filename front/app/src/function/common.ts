/**
 * @brief inputが空でないかの確認 
 * @param args inputの値
 * @returns {boolean}
 */

export const isValidRequiredInput = (...args: any[]) => {
  let validator = true;
  for (let i=0; i < args.length; i=(i+1)|0) {
      if (args[i] === "") {
          validator = false;
      }
  }
  return validator
};
