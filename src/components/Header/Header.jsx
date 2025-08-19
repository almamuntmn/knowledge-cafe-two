import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex items bg-center justify-between border-b-2 pb-4'>
            <h1 class="text-3xl font-bold">
                Knowledge Cafe Website
            </h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;