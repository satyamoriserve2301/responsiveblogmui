import axios from "axios";


export const fetchRecords = (page, pageSize, URL, setDataSource, setTotalPassengers, setLoading) => {
    setLoading(true);
  axios
    .get(`${URL}?page=${page}&size=${pageSize}`)
    .then((res) => {
      setDataSource(res.data.data); 
      setTotalPassengers(res.data.totalPassengers); 
      setLoading(false); 
    })
    .catch(() => {
      setLoading(false); 
    });
};
