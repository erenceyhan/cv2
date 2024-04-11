import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import axios from "axios";

function BasicExample() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // API'ye istek yapma
    axios
      .get("http://localhost:9090/api/city") // Lütfen port numarasını uygun şekilde değiştirin
      .then((response) => {
        // API'den gelen veriyi al ve state'i güncelle
        setCities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  }, []); // Sadece bileşen yüklendiğinde bir kere çağrılmasını istiyoruz, bu yüzden boş bağımlılık dizisi []

  return (
    <Table striped bordered hover>
     <thead>
        <tr>
          <th>#</th>
          <th>City Name</th>
          <th>City Plate Number</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city, index) => (
          <tr key={city.cityPlateNumber}>
            <td>{index + 1}</td>
            <td>{city.cityName}</td>
            <td>{city.cityPlateNumber}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BasicExample;
