import { useEffect, useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';    
import FilterComponent from './FilterComponent';




 

const DataService = (props) =>{

   
    
    
    const API_URL=props.API_URL;
   

    console.log(props.API_URL)

    const [data,getData] = useState([])

    const fetchData = async () =>{

        const options = {
          method: 'GET',
          params: {
            url: API_URL,
          },
          mode:"cors"
        };

        const response = await axios.get(`${API_URL}`);
        console.log(response.data)
         getData(response.data);
      }


      
      
     
//  useEffect(() =>{

//     <LaborCode funcPostData = {postData}/>
  
//  })
 



 useEffect(() =>{
        fetchData();
    
    },[API_URL])

    const [filterText, setFilterText] = useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = useState(
      false
    );
    // const filteredItems = data.filter(
    //   item => item.name && item.name.includes(filterText)
    // );
    const filteredItems = data.filter(
      item =>
        JSON.stringify(item)
          .toLowerCase()
          .indexOf(filterText.toLowerCase()) !== -1
    );
  
    const subHeaderComponent = useMemo(() => {
      const handleClear = () => {
        if (filterText) {
          setResetPaginationToggle(!resetPaginationToggle);
          setFilterText("");
        }
      };
  
      return (
        <>
        <FilterComponent
          onFilter={e => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
        
        </>
      );
    }, [filterText, resetPaginationToggle]);
  

    return (
  
       <>
      
    
        <DataTable title={props.tableTitle} columns={props.columns} data={filteredItems} pagination striped defaultSortField="name"  subHeader
        subHeaderComponent={subHeaderComponent}/>
        
        </>
    
    );

}

export default DataService;