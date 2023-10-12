import React , {useState , useEffect} from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'

function CategoryList({setCurrentCategory , currentCategory}) {
  const [categories , setCategories] = useState([]);
  useEffect(() => {
     fetch("http://localhost:3000/categories")
    .then((response) => response.json())
     .then((data) => setCategories(data));
  } , []);
  
  return (
    <div>
      <h1>CATEGORY LIST</h1>
      <ListGroup>
        {
          categories.map(category => {
            return <ListGroupItem active={category.categoryName === currentCategory.categoryName ? true : false} style={{textAlign:"center" , cursor:"pointer"}} key={category.id} onClick={() => setCurrentCategory(category)}>{category.categoryName}</ListGroupItem>
          })
        
        }
      </ListGroup>
    </div>
  )
}

export default CategoryList
