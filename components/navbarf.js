

function navbarf(){
    return `<hr>
    <div id="footer_main">
        <div id="footer_upper">
            <div>
                <a href="https://www.firstpost.com/">
                    <img  width="100" height="70" src="https://www.firstpost.com/static/images/fp-logo.png" alt="">
                </a>
            </div>
            <div id="social">
                <a href="https://www.facebook.com/firstpostin">
                    <img width="30" height="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAgVBMVEUADf////8AAP+Wl//U1f/6+v/9/f+mpv+Li/8ABv/MzP+DhP/P0P/Gxv/Z2f/v7//q6v/Cwv/09P9YWP+6uv+QkP85Ov89Pv9JSv99ff8kJv80Nv+srP8VF/+jo/+IiP/i4v9mZ/9hYv+xsf91dv9DRP+cnf9wcP9NT/8sLf9dXf9sjB0OAAAE60lEQVRogcXb63aqMBAFYBgFjSKgolYUtVV7xPd/wBMuXoAA2STY+dcu4TMSQkhmDLNjWI/oegIDPsKfBKvv9cZgWVC8uQ1+56d+ZcsNvtchpcEekf0ZxT+DideP7DmXr5Q0RJF+gd3PyNctW8NpzE8tRF+R6MtgoVG2Dl/t7FM3tq4m2Rsbsuzjh/+ZaZD9bd2lbWx4PFSUvV+oue/20lGRg7ibm9nbxrusSfbvHRucBaNw3k0+Gypu3uz6W6xWtrZ4xxLYYe3VrpNdhStcoGmEyWelK1y0vxF5peOXftKh8GIL5Yu2BjfQAtn+pxfmdCx4fFdlS3OLU5qqg2lFtnuAkx+8Mp5V5FUfMKd3Zbos9wQnrbYb5aAvmNP3JtnXeR9X6FW9bEX9NTmhZ7VyL936FYz8GrnHi5xFYQh/kxdhh/lWIdo/fxbK32CTk6n9dhRMHuG0j7os8gQy+Fszuu5LDwKJsYCWVdleQzJFZ7McY4kzUFCRBxjMBPNpKXlXlhcR0r2Y4NkjJ78a/ZDBJgcCWFKOirINDZu0FsFyskGHggw2ea8gM6MgY08KEi+OyMmPS5XJZ6zJGyEsLd/e5CUmH5Vkg9ynfMKGr1LPtkaXZRL3WPKS0fQpy35ZoWzfHg8M2b5C60UuW1+gXBhGXPzZSpNcRo8tyljvzE5wyeWjkowNBdkJNotMvn1aTs/AZR+di2iQR6k8Qw/VIC9TGbyndMgsXiQycE/lN25BXgEzwBftcnkhO/QkLyj7EY9DYUF3chjlMQWaEHDZNeTl4vtJOYAOQwMuz4HPjxtloMPQF5dH2mTgDZhPBA2kb7bIwIjEmGUgz+YWGVi8YwaXN7pkC5k4k6tRXsjfJPxUjmEC37RZhmY2XLaAb9osA7cnLjeOJNCTh2aY/HWcJlFYS5xv0/9Nj9AElvaQ3PLEAGCD5picH6X8lMyuM/sr2bzCR+qSgZFEswxO8/XI6biNr+7qkJNnFX6kBplibE6iUd5wefgn8gqbe2qU9+B8W5/sJDIwTdYls9BLZLiLaXivuqXvVSf0maFBXqWyhY7cGmTnr9YMkm2zRJ58XE62rhLZA/fX1eVZLpvbz8os8h+y81k5XZTKZBubHSjLzlM2fz8p09V+ydZH5WxRP19Zh9aH1GRG9rvsf04u7WNA27BK8qPJT/kE7GQoyfRrFmWk0SoyixZl2Qulz6AivzacXnux8qtTCnK+b1OU5ReJuGw/A5IZuSJZflMB3Gl/O/BtueM9z+DQe57B1RLL4IYZHIzelzkKsqcvE04UxcS8Yg4NOi/C4H9mvdzxNVwOjswmGU7tkIfLKXmV/DDtqXg5XMlMqObE9dLBBbkY1TxAH1+yaYepmuoqyH308HWqVliQBCLM99TczYRwTY6rVppCYf56TV7vQF9aXk1ybW0uc6BpIGW0rRFq87d9fG1QEFST9NIkm/ZYudmMNvU1KU15+s5a7WqTMWioRGqsTbCmCs0mujXWorTUY5y6licwCoWZXNKyaQ43HWxGdGgr+ZKou5n9gPUv/Kse2k8rVWvkbuVrfvhk9B7IlLhJ1ld5+7tMYhD/zPooWdgmX1N2GiyjBj0tKrteJpJ1XWAd3Wk23oV5Fd2LzCrpot197yKFhHDtoD87r65rer1nMBbvph2KB/GqxTQs6+RkMexaMfkfzVs+PrDcCJMAAAAASUVORK5CYII=" alt="">
                </a>
                <a href="https://twitter.com/firstpost">
                    <img  width="30" height="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAVFBMVEX///9VrO9KqO5Qqu/5/P6z1/fT6PpGpu5vt/Gs1PadzPW32ffL4/l5u/H0+f6WyPSDwPJisu/E3/jl8vyiz/Vcr++Kw/K83fc5o+7Z6/rg7vvs9P1qwntMAAAExUlEQVR4nO1b25aqMAyVtlJAqZSbIP//nwcYHRlJ0oA403UW++E8nJF2k+becDjs2LFjx44d/x+UKc7XuLz0KONrWBj1q9ubc5lZ0WjRQ8rhX90Im5Vn8yvbq7C0WksZzCCl1rYMPywNdUusFMD2TxrSJrcPMshTIfDtHxAizT+zvzpWmnj/H7LQ1XH781An8gDmopCnjUmcI8YJvJCIzhsSUDX3CKaQOttMEDlHCUFBiG30UtUrCYwk6g0E0S3Xgh8cou5dBmGwQgumkEH4HoOjfo/AAH18i8Fbh/CAeIPDaRMGPYfT38pg5LBSDtsxWMsh3EATn9Ar7KLbksCAxf5BRW/6g1fIaKmffMcrwxD1Mgb55gx6DotilvoAg57DkqPY/hhGCguO4rypPT6h2XnU5tbwAN8q1oUGKfrqysGdGyzUmv11kJXHU1nbSZYJlFySJ4YVsUFE+b2cNGF2F4UUaTT/IS9WVIs1QcTTl8v7BfpiNwoNIIWKwyCHzEFeCtxK5EsI6iIdxX1hWQLi1Bz/lEJCEO3hjJ2PmJWxajyVEHpApm4GN/DBwZoQp41pubFg+TEnPEMCUhj9GphByAhhUGmRlHOJisTFQFnwTePxj0U15yfgXORWxyEcaiqXXYagOTxsycyCB+bwhv81FlrsVXlngLT4Wwo9ri+ljbigS5kMXqt0UACJTzfq6mb6E8LIUlh9paUZmAZ+bGpKRa2fi+sWWakLMCPWdF8ODdPF9FdFYh8BqUFsjIi2jpANWNGIV99uwrqSoo9DDaJcBrSsL5HSypBh3AFTul2TtGqQuENRyCgGsFcYxbAw/zUVSiGwlGcwaJyWrPjCoyAofSxgg+jjQBk01yUUOiLpaAriQcwgBhG0xyWNXaoiJevLK8LdHVteQeWfgpJnjDzIifI/QVUiT3cPAI4QAwfq+CBQdQAZJS5oZoRHIxA3nIBjsQvOfdklA1kWy3UUsOQIAZiA8ijg5Be5R9zFjUtRFMDE8fFgyr/8oqshUh0xo/ySX5Vzq1I48fmmQBkl5pruHBpbsozT0RwgXRP1rKy7ti04cnA1B0gHjYWpERW3bXd1dEjIMEVqMjdQwLn7dCFKr/GUZQCaqv4EZVYjyJQFT9y+6HOOoqUOcwCduKHp6x2Vu5NsnO0JR/rqMCcpY5dJ1M4GiSOJN652n7AxeRpORegNwuFlXdrck2iaFLUqBgNXQYcnLc8lZIbKIWb0TJ1lLVzcTwhQV9Elp2vrLO4pzyClbjJ8AZWx+sbOFgd8mlprIYLoQoXKVrL6lQwfC7W76jAM26Ij67AEGm+BKLgzQAXkXO5RhBzoQoGQKSPWQq1PqS0R49XVsm8PeKUpWJD2B5200AuYMFkwYsJrAKO1mBDR5dxNpriUKfLa8rTwsQavDa7wTF5qYdNLEp9OxzKp00rrJfsH7MsAx5WIHIiM1x/L727Y9+ceXAx5cD3mwyWhD1elHlwY+3Bt7sPwgAcjFD4MkvgwTuPDUJEPo1U+DJj5MGbnw7ChDyOXPgyeHjwYvz2sHkIW2w0hHzwYxT58DaQvIrD5QPrBg7H8EX/9ccIA9yca4sOfaIwsqA9Vms9/qHLHH3+u88Aff7S0Y8eOHTt2/A7+AbKgPZphfM85AAAAAElFTkSuQmCC" alt="">
                </a>
                <a href="https://www.instagram.com/firstpost/">
                    <img  width="30" height="30" src="data:image/jpeg;base64,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" alt="">
                </a>
                <a href="https://www.youtube.com/channel/UCz8QaiQxApLq8sLNcszYyJw/featured">
                    <img  width="30" height="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAB0CAMAAAArd/mVAAAAaVBMVEX/////AAD/Rkb/enr/ysr/srL/iIj/+Pj/v7//b2//mZn/8/P/f3//YmL/fHz/6Oj/MTH/paX/09P/U1P/2tr/qqr/4uL/T0//c3P/Cgr/WVn/7u7/oaH/KCj/FBT/Hx//PT3/kJD/aWkaJ1GhAAAC10lEQVR4nO2b246jMAxAoRBguJRyLb1QCv//kZNetlppZmdx7LgTyeeJh0qcRiF2HMfzBEEQBEEQBEEQhB+Is1PZt3UdhmGSJEp15zSNonwIguHjjn4KomhO0/TcKZUk+odh3fZ9ecoYLftQpfmyFM1+s9tNFx/GZdxdN/uiWIa5Snqr3rXKN0C7/7IJVG1FNmmgI7mSS5OQy5aFHdcHRUlrm0w2bX1/JB3g0K7sDcIZXB/s615aMt2rfVu9RlDZdhy2vq9obDOWwdXDSxM0ah5bqq9ty6W7JdElD7z/guRjK0cu3ZEitoUMi+6DQ0igq7hsaZaylE83JdAN+HQDAt09n26Dt40tp45/M8Z4XT5b38frZutfNqFXaHzW0K9/2T7Dxmt8nABsJHQQbY8oXXySk4B0Qb//Cn7HVgF1Pe9svpZ0aF1AUPuTUZXGkeWM1s3hunoKG1YlZrTuYKKrv9CdiS4+QV/MdL0YMOlfDG/T1QEmB2fKC1oXMAu/bF5a6L6peKuunsIwYbwuIEx9tzXMKkiZ9e26Wjhi1I0brK4OG6v/8q/Q1YnEylX4iNYF7H1+KmuoVcJ4XZLRXavbYLcTRJNhZRETP7rolQHyqaF1HVvIkFGNPUw4FoRZUxx8RuZYAmmcnpucF+HT8w8zXbPNT47WBRRmfsPWcobrlsa1pwqtewbrIsoi+Go/4Gjiros6nMefpbCW9PCn7u36l+0zQMnnW/AFU8fK0Y4V+2O2M1aSoxTHDqpcOwZ07JDVsSNshh6yJyQNAo61XzjW3OJa65BjjVmOtb051lTI1LJ5pbJlaYg9EDbwMoQKihDxwnYz90TcLe9Wq7xn8yLCkf4iwo1abemveeSWrnk8yfqkm4elKJrNdTdOwDXj8LxEszwu0RBsdtYSn059295uKN2vKHVVVaWaOcqjKMoDzVY/pK8bSrcrSjX7FSVBEARBEARBEAQX+QRRlDfusLD7PgAAAABJRU5ErkJggg==" alt="">
                </a>
            </div>
        </div>
        <hr>
        <div id="footer_down">
        <div>
            <h3>Firstpost</h3>
           <p><a href="">About Firstpost</a></p>
           <p><a href="">Press Release</a></p>
           <p><a href="">RSS</a></p>
           <p><a href="">Twitter</a></p>
           <p><a href="">Facebook</a></p>
           
        </div>
        <hr>
        <div >
            <h3>Section</h3>
            <p><a href="">Front Page</a></p>
            <p><a href="">Politics</a></p>
            <p><a href="">Sports</a></p>
            <p><a href="">India</a></p>
            <p><a href="">World</a></p>
            <p><a href="">Business</a></p>
            <p><a href="">Entertainment News</a></p>
            <p><a href="">Cricket</a></p>
            <p><a href="">Tech</a></p>
            <p><a href="">Health</a></p>
            <p><a href="">Photos</a></p>
            <p><a href="">Videos</a></p>
            <p><a href="">Press Release</a></p>
            <p><a href="">Firstculture</a></p>
            <p><a href="">Long Reads</a></p>
            <p><a href="">Latest Mobiles</a></p>
            <p><a href="">Latest Tablets</a></p>
            <p><a href="">Latest Laptops</a></p>
        </div>
        <hr>
        <div>
            <h3>Plus</h3>
            <p><a href="">Cricket Live Score</a></p>
            <p><a href="">New Delhi</a></p>
            <p><a href="">Mumbai</a></p>
            <p><a href="">Fp Exclusives</a></p>
            <p><a href="">Board Exam Results 2020</a></p>
            <p><a href="">Ipl 2020</a></p>
            <p><a href="">Coronavirus</a></p>
        </div>
        <hr>
        <div >
            <h3>Tools</h3>
            <p><a href="">Rss Feeds</a></p>
            <h4><a href="">Apps</a></h4>
            <p><a href="">Ios</a></p>
            <p><a href="">Android</a></p>
        </div>
       
    </div>
   
    
    <hr>
 <div id="last">
     <h3>Network18 sites</h3>
    <p><a href="">Moneycontrol</a></p>
    <p><a href="">News18</a></p>
    <p><a href="">CNBC TV18</a></p>
    <p><a href="">Overdrive</a></p>
    <p><a href="">Forbes India</a></p>
    <p><a href="">TopperLearning</a></p>

 </div>
 <hr>
 <p class="copy">Copyright © 2022.
    Firstpost
    - All Rights Reserved.</p>
    <div id="privet">
        <h3>Terms of use</h3>
        
        <h3>Privacy</h3>
     
        <h3>Cookie Policy</h3>

    </div>
</div>`
}


export default navbarf;