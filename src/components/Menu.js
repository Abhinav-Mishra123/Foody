import React , {useState} from 'react';
import "../Styles/Menu.css";
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import jsonData from "./data.json"
const itemsPerPage = 9;



function Menu(){
    
const [searchvalue, setsearchvalue] = useState("");
const [currentPage, setCurrentPage] = useState(0);

const filterData = jsonData.filter((restaurent) =>
restaurent.short_desc.toLowerCase().includes(searchvalue.toLowerCase())
)

const handleSearchvalue = (e) =>{
    setsearchvalue(e.target.value)
}
const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
const pageCount = Math.ceil(filterData.length / itemsPerPage);
const offset = currentPage * itemsPerPage;

const displayedRestaurants = filterData.slice(offset, offset + itemsPerPage);

const styles = {
    color: '#000',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize:'20px',
    position:'absolute',
    top:"10%",
    left:"50%",
    transform: "translate(-50%, -50%)"
}
    return (
        <>

            <div className='container'>
                <div className='row mb-3'>
                 <h2 className='text-center'>Menu List </h2>
                    <div className='col-md-8 offset-md-2'>
                    <form className="d-flex mt-3" role="search">
                        <input className="form-control me-2 searchbar" value={searchvalue} onChange={handleSearchvalue} type="search" placeholder="Search Your Favourite Food ..." aria-label="Search"></input>
                        {/* <button className="btn btn-outline-danger w-25 serachbtn" type="submit">Search</button> */}
                    </form>
                    </div>
                </div>
                <div className='row mt-5'>
                    {displayedRestaurants.length === 0?
                    (
                        <div className='col-md-12 text-center'>
                        <div className='not-found-img' style={{position:"relative"}}>
                            <img src='https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?size=626&ext=jpg&ga=GA1.2.182985599.1692083476&semt=ais' style={{borderRadius:'20px'}} className='img-fluid' alt='not found'/><br></br>
                            <div className='sorry-for-that' style={styles}>
                            <p className='text-center' style={{marginBottom:"4px"}}>No Data Found</p>
                            <Link to="/menu" style={{fontSize:"40px", fontWeight:"700"}} aria-label="Search" >Try Again</Link>
                            </div>
                        </div>
                      </div>
                    ):(
                        displayedRestaurants.map((restaurent) => (
                <div className='col-md-4 col-lg-4 col-sm-12 mb-5' key={restaurent.id}>
                    <div className='food-item'>
                        <img src={restaurent.img} alt={restaurent.name} className='food-img'></img>
                                <p className='restaurent_offer'>{restaurent.offer}</p>
                        <div className='food-item-content'>
                            <div className='food-item-left'>
                                <p className='restaurent_name'>{restaurent.name}</p>
                                <p className='restaurent_desc'>{restaurent.short_desc.split(' ').slice(0,10).join(' ')}</p>
                            </div>
                            <div className='food-item-right'>
                                {/* <p className='restaurent_rating'>{restaurent.rating}*</p> */}
                                {/* <p className='restaurent_price'>{restaurent.price}</p> */}
                                {/* <p className='restaurent_time'>{restaurent.time}</p> */}
                                <Link to="/book-table"><button className='btn btn-danger'>Book a table</button></Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    ))
                    )}
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                    {pageCount > 1 && (
          <div className="pagination-container text-center">
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          </div>
          
        )}
        </div>
        </div>
    </div>

        </>
    )
}

export default Menu;