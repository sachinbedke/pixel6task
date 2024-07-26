import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useGetUsersQuery } from '../redux/api'

const App = () => {
  const [setsetData, setSetsetData] = useState([])
  // const { data } = useGetUsersQuery()
  const [LIMIT, setLIMIT] = useState(0)
  const [Skip, setSkip] = useState(0)

  const getUsets = async () => {
    const result = await axios.get("https://dummyjson.com/users", { params: { limit: LIMIT, skip: Skip } })
    setSetsetData(result.data)
  }

  useEffect(() => {
    getUsets()
  }, [LIMIT, setSetsetData])

  return <>

    <div className='container'>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="https://pixel6.co/wp-content/themes/new-pixel6-wp/assets/images/Pixel6.png" height={50} alt="" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" href="#">Home</a>
              <a class="nav-link" href="#">Features</a>
              <a class="nav-link" href="#">Pricing</a>
            </div>
          </div>
        </div>
      </nav>
      <nav class="">
        <div className="d-flex justify-content-between">
          <a className="navbar-brand me-0" href="#">
            <h1>Employees</h1>
          </a>
          <div className="ms-0 d-flex">
            <select className="form-select">
              <option selected>country</option>

              <option value="1">USA</option>

            </select>

            <select className="form-select" onChange={e => setLIMIT(parseInt(e.target.value))}>
              <option selected>Limit</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <select className="form-select" onChange={e => setSkip(parseInt(e.target.value))}>
              <option selected>Skip</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

        </div>


      </nav >
      {
        setsetData && <table class="table  table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Full Name</th>
              <th>Demography</th>
              <th>Designation</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {
              setsetData.users && setsetData.users.map((item) => <tr>
                <th scope="row">{item.id}</th>
                <td>
                  <img src={`${item.image}`} height={50} alt="" />
                </td>
                <td>{item.firstName} {item.maidenName}  {item.lastName}</td>
                <td>{item.gender == "female" ? "F" : "M"}/{item.age}</td>
                <td>{item.company.title}</td>
                <td>{`${item.address.state}, USA`}</td>
              </tr>)
            }

          </tbody>
        </table>
      }
    </div >

  </>
}

export default App