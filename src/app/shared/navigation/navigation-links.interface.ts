/*
* 'unique' variable is used to determine if
* content of the link will be same on all pages
* if 'unique' === true content is static
* if 'unique' === false content is not static (eg. facilities)
*
* 'dropdown' variable used to determine if the link
* will be part of the dropdown list
*/
export interface NavLinks {
  linkName: string;
  linkPath: string;
  linkIcon?: string;
  unique: boolean;
  dropdown: boolean;
}
