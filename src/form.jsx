


export function Form(){
    return(
        <>
        
        {/* <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Name</span>
  <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
</div>
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Email</span>
  <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
</div>
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Phone</span>
  <input type="text" className="form-control" placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" />
</div> */}



<form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option  value="USA">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
        </>
    )
}