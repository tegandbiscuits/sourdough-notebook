import React, { useRef } from 'react';
import type { AriaNumberFieldProps } from 'react-aria';
import { useLocale, useNumberField } from 'react-aria';
import { useNumberFieldState } from 'react-stately';
import classNames from 'classnames';

function NumberField(props: AriaNumberFieldProps) {
  const { label } = props;
  const { locale } = useLocale();
  const state = useNumberFieldState({ ...props, locale });
  const inputRef = useRef(null);
  const {
    labelProps,
    inputProps,
    isInvalid,
    errorMessageProps,
    validationErrors,
  } = useNumberField(props, state, inputRef);

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="form-control">
      <div className="label">
        <span
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...labelProps}
          className={classNames(labelProps.className, 'label-text')}
        >
          {label}
        </span>
      </div>

      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...inputProps}
        ref={inputRef}
        className={classNames(
          labelProps.className,
          'input input-bordered',
          { 'input-error': isInvalid },
        )}
      />

      {isInvalid && (
        <div className="label">
          <div
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...errorMessageProps}
            className={classNames(errorMessageProps.className, 'label-text-alt text-error')}
          >
            {validationErrors.join(' ')}
          </div>
        </div>
      )}
    </label>
  );
}

export default NumberField;
