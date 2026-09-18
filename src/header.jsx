
function Header(){
    return(
        <header class="z-50 bg-[#10172a] fixed w-full p-3 justify-items-start flex justify-between items-center">
        <div class="text-white font-extrabold border p-1 text-2xl">LEE</div>
        <nav>
          <ul class="flex gap-3">
            <li><a href="#">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#proj">Projects</a></li>
            <li><a href="#cert">Certificates</a></li>
            <li><a href="#educ">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
}
export default Header;