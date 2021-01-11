import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getBoards } from '../../actions/board';
import CreateBoard from './CreateBoard';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TextField } from '@material-ui/core';

const Dashboard = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const boards = useSelector((state) => state.board.boards);
  const loading = useSelector((state) => state.board.dashboardLoading);
  const dispatch = useDispatch();
  const [searchValue,setsearchValue] = React.useState("");
  const [selectedBoard,setselectedBoard] = React.useState(useSelector((state) => state.board.boards))
  
  

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  if (!isAuthenticated) {
    return <Redirect to='/' />;
  }

  const searching = (e) =>{
    setsearchValue(e.target.value)
    let filterboard = boards.filter((board)=>{
      if(board.title.includes(e.target.value)){
        return board;
      }
    });
    setselectedBoard(filterboard)
  }


  return (
    <div className='dashboard-and-navbar'>
      <section className='dashboard'>
        <h1>Welcome {user && user.name}</h1>
        <h2>Your Boards</h2>
        {loading && <CircularProgress className='dashboard-loading' />}
        <TextField value={searchValue} onChange={searching}>Search List</TextField>
        <div className='boards'>
          {selectedBoard.map((board) => (
            <Link key={board._id} to={`/board/${board._id}`} className='board-card'>
              {board.title}
            </Link>
          ))}
          <CreateBoard />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;