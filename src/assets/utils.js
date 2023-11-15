import { v4 as uuid } from "uuid";

function camelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '')
}

function getId() {
  return uuid();
}

function educationFactory(id, school, degree, startDate, endDate, location) {
  return {
  id,
 school,
 degree,
 startDate,
 endDate,
 location}
}

export {camelCase, getId, educationFactory}