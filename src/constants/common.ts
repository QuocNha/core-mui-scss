export const API_TAG = {

};

export const IMAGE_DEFAULT = {
  COMPANY: '/images/avatar_default.svg',
  USER: '/images/avatar_account_default.svg',
};

export enum StatusEnum {
  All = 9999,
  Active = 1,
  Inactive = 2,
  Block = 3,
  Deleted = 4,
}

export enum CompanyHistoryTypeEnum {
  ERC = 3,
}

export enum RoleActionEnum {
  Edit = 1,
  View = 2,
}

export enum RoleStatusEnum {
  Active = 1,
  Inactive = 2,
}

export const DELETE_REASON = {
  MIN_LENGTH: 8,
  MAX_LENGTH: 200,
};
