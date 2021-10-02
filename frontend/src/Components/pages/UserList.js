import React, { useEffect } from 'react'
import { LinkContainer } from "react-router-bootstrap"
import { Table, Button, Container} from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Stuff/Message'
import Loader from '../Stuff/Loader'
import Navbar from '../Navbar/Navbar'
import { listUsers, deleteUser} from '../../actions/userActions'
import swal from 'sweetalert'
import '../../style/index.css'
import NavbarBottom from '../Navbar/NavbarBottom'

const UserList = () => {
    let history = useHistory()
    const dispatch = useDispatch()

    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector((state) => state.userDelete)
    const { success:succesDelete } = userDelete

    useEffect(() => {
        if(userInfo && userInfo.isAdmin){
            dispatch(listUsers())
        }

        else{
            history.push('/login/accountcontext=register/auth/lang=en')
        }

    }, [dispatch, history, userInfo, succesDelete])

    const deleteHandler = (id) => {
        swal({
            title: 'Are you sure?',
            text: 'Remember, this action cannot be reversed!',
            icon: 'warning',
            buttons: ['No', 'Yes']
        }).then(answer => {
            if(answer){
                swal({text: 'Succes, user has been deleted!',
                icon: 'success'
                })
                dispatch(deleteUser(id))
            }
        })
    }

    useEffect(() => {
        document.title = "Admin Dashboard | Fashions, Explore dan beli pakaian dengan fashion favorit kamu sekarang juga"
    }, [])

    return (
        <>
        <Navbar/>
        <Container>
            <h3 style={{fontFamily: 'JetBrains Mono',fontWeight: 'bold', marginBottom: '30px'}}>List of Users</h3>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                <Table striped bordered hover responsive className='table-sm'> 
                    <thead>
                        <tr>
                            <th>USER ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADMIN</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td><a href={`mailto:${user.email}`} style={{textDecoration: 'none', color: 'teal'}}>{user.email}</a></td>
                                <td>{user.isAdmin ? <div>✔️</div> : <div>❌</div>}</td>
                                <td>
                                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                        <Button className='btn-sm' variant='light'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                    </LinkContainer>
                                </td>
                                <td>
                                    <Button className='btn-sm delete' variant='light' onClick={() => deleteHandler(user._id)}>
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
        <NavbarBottom/>
        </>
    )
}

export default UserList
