const GenderCheckbox = () => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='block text-white font-semibold font-serif'>Male</span>
					<input
						type='checkbox'
						className='checkbox border-slate-1000'
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='block text-white font-semibold font-serif'>Female</span>
					<input
						type='checkbox'
						className='checkbox border-slate-1000'
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
