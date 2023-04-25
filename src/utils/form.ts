import { translate } from 'src/i18n/translate';
import {
  rxASCII,
  rxMustContainAlphabet,
  rxMustContainNumber,
  rxPrice,
  rxUserName,
} from 'src/utils/regex';
import * as Yup from 'yup';
import { RequiredStringSchema } from 'yup/lib/string';
import { charContainsVowel, capitalizeEveryFirstLetter } from '.';

export type TranslationType = (ns: any, option?: any) => any;

export const customRulePhone = ({
  name = '',
  minLength = 11,
  maxLength = 12,
  isCompanyPhone = false,
  isRequired = true,
  messageRequired = `${translate('enter')} ${name.toLowerCase()}.`,
}: {
  name: string;
  minLength?: number;
  maxLength?: number;
  isCompanyPhone?: boolean;
  isRequired?: boolean;
  messageRequired?: string;
}) => {
  const yupMinMax = (yup: RequiredStringSchema<any>) => {
    return yup
      .min(
        minLength,
        translate(
          isCompanyPhone
            ? 'dialog:$field_must_contain_at_$value_digit'
            : 'dialog:$field_must_contain_$value_digit',
          {
            field: translate(name),
            value: minLength,
          }
        )
      )
      .max(
        maxLength,
        translate(
          isCompanyPhone
            ? 'dialog:$field_must_contain_at_$value_digit'
            : 'dialog:$field_must_contain_$value_digit',
          {
            field: translate(name),
            value: maxLength,
          }
        )
      );
  };
  const yup = Yup.string();

  if (isRequired) {
    const yupResult = yup.required(translate(messageRequired));
    return yupMinMax(yupResult);
  }
  const yupResult = yup.notRequired();

  return yupMinMax(yupResult);
};

export const customRuleString = ({
  name = '',
  minLength = 0,
  maxLength = 255,
  isRequired = true,
  messageRequired = translate('dialog:$field_cannot_be_empty', {
    field: name,
  }),
}: {
  name: string;
  minLength?: number;
  maxLength?: number;
  validate?: (val: any) => any;
  isRequired?: boolean;
  isPhone?: boolean;
  messageRequired?: string;
}) => {
  const yupMinMax = (yup: RequiredStringSchema<any>) => {
    return yup
      .min(
        minLength,
        translate('dialog:require_$field_more_than_$number_characters', {
          field: translate(name),
          number: minLength,
        })
      )
      .max(
        maxLength,
        translate('dialog:require_$field_less_than_$number_characters', {
          field: translate(name),
          number: maxLength,
        })
      );
  };
  const yup = Yup.string();
  if (isRequired) {
    // const yupMessage = charContainsVowel(name?.[0])
    //   ? `${translate('dialog:enter_a')} ${name}`
    //   : `${translate('dialog:enter_an')} ${name}`;
    const yupMessage = messageRequired;
    const yupResult = yup.required(translate(yupMessage));
    return yupMinMax(yupResult);
  }
  const yupResult = yup.notRequired();
  return yupMinMax(yupResult);
};

export const customRuleNumber = ({
  name = '',
  minLength = 7,
  maxLength = 20,
  minNumber = -Number.MAX_SAFE_INTEGER,
}: {
  name: string;
  minLength?: number;
  maxLength?: number;
  isRequired?: boolean;
  minNumber?: number;
}): RequiredStringSchema<any> => {
  return Yup.string()
    .required(
      translate('dialog:$field_required', {
        field: translate(name),
      })
    )
    .min(
      minLength,
      translate('dialog:require_$field_more_than_$number_characters', {
        field: translate(name),
        number: minLength,
      })
    )
    .test(
      name,
      translate('dialog:the_$field_is_more_than_$number', {
        field: translate(name),
        number: minNumber,
      }),
      (numberText) => {
        return !((numberText as unknown as number) < minNumber);
      }
    )
    .max(
      maxLength,
      translate('dialog:require_$field_more_than_$number_characters', {
        field: translate(name),
        number: maxLength,
      })
    )
    .matches(
      rxPrice,
      translate('dialog:the_$field_field_must_be_number')
    ) as unknown as RequiredStringSchema<any>;
};

export const customRuleEmail = ({
  name = '',
  maxLength = 255,
  isRequired = true,
  messageRequired = `${translate('dialog:enter_your_$field', {
    field: name?.toLocaleLowerCase(),
  })}`,
  messageFormatEmail = translate('dialog:you_entered_invalid_field_format', {
    field: translate(name),
  }),
}: {
  name: string;
  minLength?: number;
  maxLength?: number;
  isRequired?: boolean;
  messageRequired?: string;
  messageFormatEmail?: string;
}) => {
  const yupEmail = (yup: RequiredStringSchema<any>) => {
    return yup
      .max(
        maxLength,
        translate(`dialog:$field_must_contain_up_to_$max_characters`, {
          field: name,
          max: maxLength,
        })
      )
      .email(messageFormatEmail)
      .test(name, messageFormatEmail, (email) => {
        const localPart = email?.indexOf('@') ?? 0;
        if (localPart > 63) {
          return false;
        }
        return true;
      });
  };
  const yup = Yup.string();
  if (isRequired) {
    const yupResult = yup.required(translate(messageRequired));

    return yupEmail(yupResult);
  }
  const yupResult = yup.notRequired();

  return yupEmail(yupResult);
};

export const customRulePassword = ({
  name = '',
  minLength = 8,
  maxLength = 32,
  isRequired = true,
  messageRequired = `${translate('dialog:enter_your_$field', {
    field: name?.toLocaleLowerCase(),
  })}`,
}: {
  name: string;
  minLength?: number;
  maxLength?: number;
  validate?: (val: any) => any;
  isRequired?: boolean;
  messageRequired?: string;
}) => {
  const yupMinMax = (yup: RequiredStringSchema<any>) => {
    return yup
      .test(
        name,
        translate(
          'dialog:password_cannot_contain_space_and_non_printable_characters'
        ),
        (password) =>
          password ? (rxASCII.exec(password) as unknown as boolean) : true
      )
      .min(
        minLength,
        translate('dialog:$field_must_contain_at_least_$min_characters', {
          field: name,
          min: minLength,
        })
      )
      .max(
        maxLength,
        translate('dialog:$field_must_contain_up_to_$max_characters', {
          field: name,
          max: maxLength,
        })
      )
      .test(
        name,
        translate(
          'dialog:$field_must_contain_at_least_$alphabet_alphabet_and_$number_number',
          {
            field: translate(name),
            alphabet: 1,
            number: 1,
          }
        ),
        (password) =>
          password
            ? (rxMustContainNumber.exec(password) as unknown as boolean)
            : true
      )
      .test(
        name,
        translate(
          'dialog:$field_must_contain_at_least_$alphabet_alphabet_and_$number_number',
          {
            field: translate(name),
            alphabet: 1,
            number: 1,
          }
        ),
        (password) =>
          password
            ? (rxMustContainAlphabet.exec(password) as unknown as boolean)
            : true
      );
  };
  const yup = Yup.string();
  if (isRequired) {
    const yupResult = yup.required(translate(messageRequired));
    return yupMinMax(yupResult);
  }
  const yupResult = yup.notRequired();
  return yupMinMax(yupResult);
};

export const customRuleNormalString = ({
  name = '',
  minLength = 6,
  maxLength = 64,
  isRequired = true,
  messageRequired = `${translate('dialog:enter_your_$field', {
    field: name?.toLocaleLowerCase(),
  })}`,
  isRequiredMaxLength = false,
}: {
  name: string;
  minLength?: number;
  maxLength?: number;
  validate?: (val: any) => any;
  isRequired?: boolean;
  messageRequired?: string;
  isRequiredMaxLength?: boolean;
}) => {
  const yupMinMax = (yup: RequiredStringSchema<any>) => {
    return isRequiredMaxLength
      ? yup.min(
          minLength,
          translate('dialog:$field_must_contain_at_least_$min_characters', {
            field: translate(name),
            min: minLength,
          })
        )
      : yup
          .min(
            minLength,
            translate('dialog:$field_must_contain_at_least_$min_characters', {
              field: translate(name),
              min: minLength,
            })
          )
          .max(
            maxLength,
            translate('dialog:$field_must_contain_up_to_$max_characters', {
              field: translate(name),
              max: maxLength,
            })
          );
  };
  const yup = Yup.string();
  if (isRequired) {
    const yupResult = yup.required(messageRequired);
    return yupMinMax(yupResult);
  }
  const yupResult = yup.notRequired();
  return yupMinMax(yupResult);
};

export const customRuleUserName = ({
  name = '',
  minLength = 6,
  maxLength = 32,
  isRequired = true,
}: {
  name: string;
  minLength?: number;
  maxLength?: number;
  isRequired?: boolean;
}) => {
  const yupMinMax = (yup: RequiredStringSchema<any>) => {
    return yup
      .min(
        minLength,
        translate('dialog:$field_must_contain_at_least_$value_characters', {
          field: capitalizeEveryFirstLetter(name),
          value: minLength,
        })
      )
      .max(
        maxLength,
        translate(`dialog:$field_must_contain_up_to_$max_characters`, {
          field: capitalizeEveryFirstLetter(name),
          max: maxLength,
        })
      )
      .test(
        name,
        translate(
          'dialog:username_can_contain_alphabets_numbers_dashes_underscores_and_periods'
        ),
        (username) =>
          username ? (rxUserName.exec(username) as unknown as boolean) : true
      );
  };
  const yup = Yup.string();
  if (isRequired) {
    const yupMessage = `${translate(
      'dialog:enter_a'
    )} ${name?.toLocaleLowerCase()}`;
    const yupResult = yup.required(translate(yupMessage));
    return yupMinMax(yupResult);
  }
  const yupResult = yup.notRequired();
  return yupMinMax(yupResult);
};
