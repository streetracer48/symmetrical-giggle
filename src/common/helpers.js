import titleize from 'titleize';
import { lowerCase } from "lower-case";

export const toUpperCase = value => value ? titleize(value) : ''
export const toLowerCase = value => value ? lowerCase(value) : ''