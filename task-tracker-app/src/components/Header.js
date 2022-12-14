import Button from './Button'

const Header = ({title}) => {
  return (
    <header>
        <h1 className='header'>{title}</h1>
        <Button 
        color='green' 
        text='Add'
        onClick = {onClick} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header