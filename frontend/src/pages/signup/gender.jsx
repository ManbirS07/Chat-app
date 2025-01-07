const GenderCheckbox = ({onCheckBoxChange,selectedGender}) => { //destructuring the props
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender==="male"?"selected":""}`}>
					<span className='block text-white font-semibold font-serif'>Male</span>
					<input
						type='checkbox'
						className='checkbox border-slate-1000' 

						//checked attribute is used to check the checkbox
						checked={selectedGender==="male"}
						onChange={()=>onCheckBoxChange("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender==="female"?"selected":""}`}>
					<span className='block text-white font-semibold font-serif'>Female</span>
					<input
						type='checkbox'
						className='checkbox border-slate-1000' 	

						checked={selectedGender==="female"}
						onChange={()=>onCheckBoxChange("female")} 
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
