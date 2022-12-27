import truncate from "lodash/truncate";

// We are using a utility function to truncate a review's text.
export function excerpt(string) {
  return truncate(string, {    
    length: 400, // maximum 400 characters
    separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
  });
}