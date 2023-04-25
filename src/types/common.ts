export interface GeneralOption {
  id: number;
  key?: number;
  name?: string;
  name_ko?: string;
  name_vn?: string;
}

export type ICity = GeneralOption;

export type IDistrict = GeneralOption;

export type IVat = GeneralOption;

export type IDepartment = GeneralOption;

export type IStatus = GeneralOption;

export type IReason = GeneralOption;

export type IBusinessType = GeneralOption;

export type ISellingProductType = GeneralOption;

export interface IOption {
  label: string;
  value?: string;
  img?: string;
  id?: string;
}

export interface Business {
  id: number;
  name: string;
  name_ko?: string;
  name_vn?: string;
  sort: number;
}

export type BusinessType = GeneralOption;
export type SellingProductType = GeneralOption;

export interface IDeleteReasons {
  deletion_reason: GeneralOption;
}

export interface IPermission {
  id?: number;
  name?: string;
  department?: string;
  email?: string;
  phone?: string;
  register_date: string;
  role: string;
  status: string;
  child?: IPermissionChild[];
}

interface IPermissionChild {
  id?: number;
  name?: string;
  permissionValue?: {
    text: string;
    permission: boolean;
  }[];
}

export enum TypeAction {
  Edit = 1,
  Approve = 2,
  View = 3,
  Rejected = 4,
}

export type FilterDateType = {
  from?: string;
  to?: string;
};

export interface IOptionRadio {
  id?: string;
  label?: string;
}

export interface ILink {
  url: string;
  icon?: any;
  label?: string;
}