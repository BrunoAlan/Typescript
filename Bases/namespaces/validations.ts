namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length > 3;
  };

  export const validateDate = (date: Date): boolean => {
    return date < new Date();
  };
}

console.log(Validations.validateText('Hello'));
