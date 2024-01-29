import React, { useRef } from 'react';
import type { AriaTextFieldProps } from 'react-aria';
import { useTextField } from 'react-aria';
import classNames from 'classnames';

function TextField(props: AriaTextFieldProps) {
  const { label, description } = props;
  const inputRef = useRef(null);
  const {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
  } = useTextField(props, inputRef);

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...labelProps}
      className="form-control"
    >
      <div className="label">
        <span className={classNames(labelProps.className, 'label-text')}>
          {label}
        </span>

        {description && (
          <span
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...descriptionProps}
            className={classNames(descriptionProps.className, 'label-text-alt')}
          >
            {description}
          </span>
        )}
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

export default TextField;
