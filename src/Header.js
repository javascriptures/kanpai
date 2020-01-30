import React from 'react'



function Header(props) {
    const { handleSubmit, handleChange, searchString } = props;
    return (
        <div className="searchbar">
        <form 
        onSubmit={handleSubmit}
        className="form-horizontal">
            <input placeholder="Search" type="text" name="searchString" required
            onChange={handleChange}
            value={searchString}
            />
            <button className="submit"type="submit">Let's find some drinks!</button>
        </form>
        </div>
    );
}

export default Header