import React, { useRef } from 'react';
import type { AriaTextFieldProps } from 'react-aria';
import { useTextField } from 'react-aria';
import classNames from 'classnames';

function TextField(props: AriaTextFieldProps) {
  const { label, description } = props;
  const ref = useRef(null);

  const {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
  } = useTextField(props, ref);

  return (
    <div className="form-control">
      <div className="label">
        {/* TODO: fix this false positive */}
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...labelProps}
          className={classNames(labelProps.className, 'label-text')}
        >
          {label}
        </label>

        {description && (
          <div
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...descriptionProps}
            className={classNames(descriptionProps.className, 'label-text-alt')}
          >
            {description}
          </div>
        )}
      </div>

      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...inputProps}
        ref={ref}
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
            className={classNames(errorMessageProps.className, 'label-text-alt')}
          >
            {validationErrors.join(' ')}
          </div>
        </div>
      )}
    </div>
  );
}

export default TextField;
