function FormRow({ label, error, children, orientation }) {
  return (
    <div className='flex flex-col gap-4'>
      {label && (
        <label htmlFor={children.props.id} className='font-medium'>
          {label}
        </label>
      )}
      {children}
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
}

export default FormRow;
