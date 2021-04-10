<template>
    <div>
        <section id="about" class="container mx-auto px-5 md:px-3 pt-12 md:pt-24 text-center">
            <h1 class="text-5xl md:text-9xl font-extrabold carmen bg-clip-text bg-gradient-to-r from-red-400 to-indigo-500 text-fill-transparent leading-tight inline-block">
                Awesome
            </h1>
            <h1 class="text-5xl md:text-9xl font-extrabold carmen bg-clip-text bg-gradient-to-r from-blue-600 to-green-300 text-fill-transparent leading-tight inline-block relative">
                <img src="./assets/images/spiral_2.svg" class="absolute left-2 md:left-12 -top-20 w-8 md:w-12 floatY">
                <img src="./assets/images/spiral.svg" class="absolute right-0 md:-right-14 top-0 md:-top-6 w-12 md:w-16 floatY delay-more"> Free Template
            </h1>
            <p class="carmen text-white text-opacity-50 font-normal text-sm md:leading-none leading-relaxed md:text-lg max-w-2xl w-full mx-auto mt-5 md:mt-10 mb-10 md:mb-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="relative inline-block">
                <div class="bg-gradient-to-r from-red-500 to-indigo-400 w-full h-full absolute top-6 left-0 blur opacity-40"></div>
                <a href="#" class="bg-gradient-to-r from-red-500 to-indigo-400 rounded-full md:px-8 py-3 px-6 md:py-5 text-white text-sm md:text-base font-medium carmen inline-block transition duration-300 hover:-translate-y-2 transform tracking-wider">
                    <img src="./assets/images/paper-plane.svg" alt="Paperplane icon" class="w-4 md:w-5 to-white mr-3 inline-block">Discover us now&nbsp;!
                </a>
            </div>
            <div class="border-b border-gray-800 border-opacity-50 overflow-hidden md:px-10">
                <div id="app_card" class="relative mt-12 md:mt-24 lg:block transform translate-y-1/2 opacity-0">
                    <!-- panel -->
                    <div class="w-full flex rounded-2xl overflow-hidden">
                        <!-- panel_navigation -->
                        <div class="h-auto bg-gray-900 w-1/12 p-6 hidden md:block">
                            <div class="flex items-center">
                                <div class="rounded-full w-3 h-3 border-2 border-red-500 mr-2"></div>
                                <div class="rounded-full w-3 h-3 border-2 border-yellow-400 mr-2"></div>
                                <div class="rounded-full w-3 h-3 border-2 border-green-400 mr-2"></div>
                            </div>
                            <!-- items -->
                            <div class="flex flex-col items-center mt-8">
                                <!-- active item -->
                                <div class="w-12 h-12 rounded-full overflow-hidden cursor-pointer border-2 border-gray-900 ring-2 ring-blue-600 mb-5">
                                    <img src="http://unikeo.net/blog/wp-content/uploads/2014/01/fb.png" class="h-full w-full object-cover object-center" alt="Facebook Logo">
                                </div>
                                <div class="w-12 h-12 rounded-full overflow-hidden opacity-70 cursor-pointer mb-5">
                                    <img src="https://www.stampaprint.fr/blog/wp-content/uploads/2016/05/logo-dribbble2.png" class="h-full w-full object-cover object-center" alt="Dribbble Logo">
                                </div>
                                <div class="w-12 h-12 rounded-full overflow-hidden opacity-70 cursor-pointer mb-5">
                                    <img src="https://cdn.sketchapp.com/uploads/1*hT6s027LBQXQ9huZX1oVmw@2x.jpg" class="h-full w-full object-cover object-center" alt="Sketchapp Logo">
                                </div>
                                <div class="w-12 h-12 rounded-full overflow-hidden opacity-70 cursor-pointer mb-5">
                                    <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" class="h-full w-full object-cover object-center" alt="GitHub Logo">
                                </div>
                                <div class="w-12 h-12 rounded-full overflow-hidden opacity-70 cursor-pointer mb-5">
                                    <img src="https://nedpark.fr/wp-content/uploads/2020/08/google-logo-carre-2015-09-400.png" class="h-full w-full object-cover object-center" alt="Google Logo">
                                </div>
                            </div>
                        </div>
                        <!-- panel channels -->
                        <div class="h-auto bg-gray-800 w-full md:w-2/12">
                            <div class="items-center flex p-4 text-white font-semibold text-sm border-b border-gray-900 carmen">
                                <img src="./assets/images/discord_partner.svg" class="w-4 mr-3" alt="Discord Partner"> Facebook
                            </div>
                            <div class="p-4">
                                <div class="mb-5">
                                    <div class="flex items-center text-gray-400 font-medium mb-2 text-sm uppercase tracking-wider">
                                        <i class="material-icons text-sm">keyboard_arrow_down</i> <span class="text-xs mr-1">👋</span>Welcome
                                    </div>
                                    <ul class="m-0 p-0 text-left pl-2">
                                        <li class="text-sm text-gray-400 font-medium flex items-center mb-2 lowercase tracking-wider">
                                            <i class="material-icons text-sm">tag</i> Welcome
                                        </li>
                                        <li class="text-sm text-gray-400 font-medium flex items-center mb-2 lowercase tracking-wider">
                                            <i class="material-icons text-sm">tag</i> Welcome
                                        </li>
                                        <li class="text-sm text-gray-400 font-medium flex items-center mb-2 lowercase tracking-wider">
                                            <i class="material-icons text-sm">tag</i> Welcome
                                        </li>
                                    </ul>
                                </div>
                                <div class="mb-5">
                                    <div class="flex items-center text-gray-400 font-medium mb-1 text-sm uppercase tracking-wider">
                                        <i class="material-icons text-sm">keyboard_arrow_right</i> <span class="text-xs mr-1">💫</span>Community
                                    </div>
                                </div>
                                <div class="mb-5">
                                    <div class="flex items-center text-gray-400 font-medium mb-1 text-sm uppercase tracking-wider">
                                        <i class="material-icons text-sm">keyboard_arrow_down</i> <span class="text-xs mr-1">💻</span>Development
                                    </div>
                                    <ul class="m-0 p-0 text-left pl-2">
                                        <li class="text-sm text-gray-400 font-medium flex items-center mb-2 lowercase tracking-wider">
                                            <i class="material-icons text-sm">tag</i> Welcome
                                        </li>
                                        <li class="text-sm text-gray-400 font-medium flex items-center mb-2 lowercase tracking-wider">
                                            <i class="material-icons text-sm">tag</i> Welcome
                                        </li>
                                        <li class="text-sm text-gray-400 font-medium flex items-center mb-2 lowercase tracking-wider">
                                            <i class="material-icons text-sm">tag</i> Welcome
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="h-auto bg-gray-700 w-7/12 hidden md:block"></div>
                        <div class="h-auto bg-gray-800 w-2/12 hidden md:block"></div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 h-2/5" style="background: linear-gradient(to top, rgb(12 16 20), rgba(135, 94, 245, 0))" />
                </div>
            </div>
        </section>
        <section class="mt-16 py-12 px-5 md:px-3 md:px-24 hidden lg:flex items-center justify-center flex-wrap flex-row">
            <img src="./assets/images/companies/facebook.png" class="w-32 grayscale mx-8 transition duration-200 transform hover:rotate-6" alt="Logo facebook">
            <img src="./assets/images/companies/google.png" class="w-32 grayscale mx-8 transition duration-200 transform hover:-rotate-6" alt="Logo google">
            <img src="./assets/images/companies/algolia.png" class="w-32 grayscale mx-8 transition duration-200 transform hover:rotate-6" alt="Logo algolia">
            <img src="./assets/images/companies/netflix.png" class="w-32 grayscale mx-8 transition duration-200 transform hover:-rotate-6" alt="Logo netflix">
            <img src="./assets/images/companies/facebook.png" class="w-32 grayscale mx-8 transition duration-200 transform hover:rotate-6" alt="Logo facebook">
            <img src="./assets/images/companies/google.png" class="w-32 grayscale mx-8 transition duration-200 transform hover:-rotate-6" alt="Logo google">
        </section>
        <section id="products" class="container mx-auto px-5 md:px-3 py-12 md:py-24 text-center">
            <h2 class="text-2xl md:text-4xl w-full mx-auto max-w-2xl font-extrabold carmen text-white leading-tight inline-block">
                Lorem ipsum dolor sit amet consectetur adipiscing
            </h2>
            <p class="carmen text-white text-opacity-50 font-normal text-sm md:leading-none leading-relaxed md:text-lg max-w-2xl w-full mx-auto mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-0 mt-14 md:mt-28 w-full max-w-6xl mx-auto">
                <div class="text-center mb-16 md:mb-32">
                    <img src="./assets/images/items/1.svg" class="h-44 mx-auto" alt="">
                    <h3 class="text-lg font-semibold mt-8 carmen text-white leading-tight">Use simple stack</h3>
                    <p class="carmen text-white text-opacity-50 font-light max-w-sm leading-normal mx-auto text-sm md:text-base mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="text-center mb-16 md:mb-32">
                    <img src="./assets/images/items/2.svg" class="h-44 mx-auto" alt="">
                    <h3 class="text-lg font-semibold mt-8 carmen text-white leading-tight">Design Thinking</h3>
                    <p class="carmen text-white text-opacity-50 font-light max-w-sm leading-normal mx-auto text-sm md:text-base mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="text-center mb-16 md:mb-0">
                    <img src="./assets/images/items/3.svg" class="h-36 mx-auto" alt="">
                    <h3 class="text-lg font-semibold mt-8 carmen text-white leading-tight">Clean code</h3>
                    <p class="carmen text-white text-opacity-50 font-light max-w-sm leading-normal mx-auto text-sm md:text-base mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="text-center mb-16 md:mb-0">
                    <img src="./assets/images/items/4.svg" class="h-36 mx-auto" alt="">
                    <h3 class="text-lg font-semibold mt-8 carmen text-white leading-tight">Deliverability</h3>
                    <p class="carmen text-white text-opacity-50 font-light max-w-sm leading-normal mx-auto text-sm md:text-base mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </section>
        <section class="container max-w-7xl mx-auto px-5 md:px-3 py-12 mt-0 md:mt-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center">
            <div>
                <div class="relative w-full max-w-md">
                    <img src="./assets/images/blob.svg" class="w-1/2 absolute -top-16 -left-16" alt="">
                    <h2 class="text-4xl md:text-6xl tracking-tight font-extrabold relative z-10 carmen text-white md:leading-tight inline-block">
                        Enrich your experience with add-ons
                    </h2>
                    <img src="./assets/images/spiral_3.png" class="absolute mx-auto -top-8 md:-top-24 right-8 md:rigt-0 md:left-24 w-12 md:w-20 floatY z-20">
                    <a href="#" class="mt-6 text-xl font-semibold carmen bg-clip-text bg-gradient-to-r from-red-400 to-blue-600 text-fill-transparent leading-tight flex items-center justify-start w-max">
                        Learn more
                        <i class="material-icons ml-2">trending_flat</i>
                    </a>
                </div>
            </div>
            <div class="block md:flex flex-col items-end">
                <div class="hidden md:flex w-full bg-gray-800 bg-opacity-30 shadow-sm pt-8 pb-3 pl-9 pr-16 max-w-md items-start justify-start" style="border-radius: 4rem;">
                    <div class="relative mr-6 min-w-max">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlTwtRvUzB5A9ITDI_Cw7NJAUqGOJjkoyzA&usqp=CAU" class="w-24 h-24 object-cover" style="border-radius: 2.1rem;" />
                        <div class="w-6 h-6 bg-pink-500 rounded-lg text-white font-semibold absolute right-0 bottom-0 text-xs flex items-center justify-center shadow-light">4</div>
                    </div>
                    <div class="inline-block">
                        <p class="text-white carmen text-xl font-semibold tracking-wider">
                            Errika Fauzi
                        </p>
                        <p class="text-base font-light text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div class="flex items-center justify-between transform translate-y-7">
                            <div class="inline-block rounded-2xl bg-gray-800 carmen text-white font-semibold px-4 w-full py-3.5 text-xs text-center mr-4">Profile</div>
                            <div class="inline-block rounded-2xl bg-blue-600 carmen text-white font-semibold px-6 w-full py-3.5 text-xs text-center">Message</div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-start justify-end mt-0 md:mt-16">
                    <div class="w-full bg-gray-800 bg-opacity-30 shadow-sm px-6 pt-6 pb-10 md:min-w-max md:w-max mr-14 relative" style="border-radius: 3rem;">
                        <div class="rounded-3xl absolute w-16 h-16 md:w-24 md:h-24 -top-2 md:-top-6 -left-2 md:-left-6 overflow-hidden flex items-center justify-center">
                            <div class="h-full w-full bg-gray-800 bg-opacity-70 blur absolute top-0 left-0" style="--blur-size:10px">
                            </div>
                            <i class="material-icons text-red-500 relative z-10 text-3xl md:text-5xl textshadow-light">
                                favorite
                            </i>
                        </div>
                        <img src="https://cdn.dribbble.com/users/323673/screenshots/14425154/media/c9766811449634cab83a657a51c8448c.png?compress=1&resize=1200x900" class="w-80 h-80 object-cover mx-auto" style="border-radius: 2.1rem;" />
                        <div class="mt-6">
                            <p class="text-white carmen font-bold text-2xl">Gallery</p>
                            <p class="text-base font-light text-gray-500">User shared photos</p>
                        </div>
                    </div>
                    <div class="w-full md:min-w-max md:w-max mt-6 md:mt-4 flex md:block items-start justify-between">
                        <div class="w-full bg-gray-800 bg-opacity-30 shadow-sm px-6 pt-6 pb-8 mr-6 md:mr-0" style="border-radius: 3rem;">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDQ0NDQ8PDw0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSghGBolGxUVITEhJSkrLi4uFx8zRDMtNygtLisBCgoKDg0NFQ8QFy0dFR0tLS0tLS0tKysrLS0tLS0tLS0tLS0tLSsrLS0tLS0rKystLSsrKystLS0tKzcrLS4tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAQIDBAUGB//EADwQAAIBAgIGBwUGBQUAAAAAAAABAgMRBBIFITFBUWEGEzJxgZGhIlJysdEUI0JTYsEVQ5KT4RYzgqLw/8QAGwEAAwEBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA2EQEAAgIBAQQHBwMEAwAAAAAAAQIDERIEBSExQRMyUXGRodEGIkJhgbHhFFLwFSNywTNT0v/aAAwDAQACEQMRAD8A3JH1j8+ljkBbQ0twz3AAbNAFAABJaAyAAC0VxGVwMrjBXAFcBorgekyintEcTphnTa5oTSJQBpYwQKgmBkJRMFIYyQwIgOPBLAwCnp5IHna33wxSGmUgCuCoLMBjrGAHW8gGh1y4CPiXWrmPY4DrI8RHxFxlqSbAaK4ArgegI9FcD0VwBZgG0ys9qDR7Y3T4PzA4ljkrbf8AALiUsRwQKgmBoYySwGkik4SwUANvYfFVKep3nBbn24rk9/cz5vpu0L4u6e+vs+j9d7b+ynRdp7y1/wBrP/dEd0/8o8/f3T+boUq8akbxd+K2OL4Nbj38HUY80bpP6eb8k7V7G6zszL6Pqaa34Wjvrb3T/wBTqfyUzd5SWCksDSAghLJiUhjIhGTADO1vBWoUqy3j2nitNPYwHFLkBE5AEtgCuGz0LgehcNjiMwDUwlwT2avkJUSxSi19QXEpYKQwJMgNIHBMFADbzifD7fv+2N02nmi3GS2SXyfFGmPNbHMTWdSzz4cXUYrYc9Ivjt4xPh/n5+Taw+Mu1ColGbdk/wAMu7g+R9D0faVcuq5O63t8p+j8r+0H2My9JFuo6HeTD4zXxtX/AOq/OPPffLZbPVfC7QwPZAqCEqEsDSAJiNIAmC0MCSBqVV94HqFdag2XAs64hs+Mlm5hstSMwAswAZgAzAFKYDvJqL5dwK5e1jlR4NPv1Bs2KUGtz+Y9mhgcExKggN1XE+D2/fNpcQ2qJY5001Z7BxZUW06mhtIUU1QxsIypPVDEa41KT3KbWtx57u7Z6nS9oZKfdm3c+R7c+y3T9VFs+DHEZPGax3cvzjXn+XhPv8fRYjorTeulVlG+tZrVItcmrHtU62fONvznL2PTc8bTWfz7/pLl4jo3iY9lQqL9MrPylY3r1WOfHucV+zM9fDVv8/Nzq2CrQ7dKpHm4O3maxes+Eue2HLT1qTH6NZyK0z5QlsBtNwPYEcSlgqJQ2A2hy5oDiSuI9gS4SwNLAyABTYxpSqBscYVnQbLhJ3GniLgWjuA4i4HEST5gqNolFcAPacq4eoDbquJ8Bt+97S4hs4lDiG1RLFKJUSuJdXQPSGrhLU5J1cN+XdZ6XODe79L1dx14OqmndPg8jtTsXF1v+5X7mb2+U/8AL6x3+977R2No4mHWUJqcd6WqUHwlHamepTLFo3EvhOq6LN0t+GavGflPunwlsOiXyc3FhqYOMu1GL+KKZcZJhM44nxhrT0Nh3to0v7cUXGe/tllPS4Z8aR8IYXoHDfkw8iv6i/tT/RYP7IL+BYb8in/TcPT39o/osP8AZClofDrZQpf24v8AYPTW9px0uKPwR8GWOAprZTgu6EV+xPpJ9rSMVI8Ihf2aPuryQuR8I9iZYSD2wg++CY+Ulwj2NWtoTDT7VCn3qCg/NFxltHmyt02K3jWHHx3RClJN0Jypy3Rl95D6rzNa9RPn3ubJ0FZ9SdfN5fSWi62Hf3sLR2KpH2qb8d3c7HRW9beDz8mG+P1o7vb5NEtnshK2AMmAJMYWqgFo1LgNOjzDIZgCWwIrgHbcT892/etoaDZ7S0PaoljlEe1xLG4j2qJKjOdOaqUpyp1FsnTk4ytwfFcmXXJavhJZKUy0nHkrFqz5T3/573pdG9N60Eo4qkqyWrraVqdTxi/Zb7rHbTrJ/FD57qvs1hvPLp78J9k98fHxj5vSYHpPgq1kqqpydvYrrqnfhd+y/BnRXqaT5vC6jsTrMPjTlHtr3/z8YddWautaexrWma83mej79eYyj5jglwHzLgWQfIuIyD5FxLqx8k6Lqx8i0Tpj2WkOmVtOmKpRTTTSaeppq6ZUWTMOTiejeEnrdGMXxpuVP0TsbRmtHm5rdJit+H/py8T0MpO/VVakHwmo1I/s/U0jqJ84Y26Cv4ZmHDx/RjFUruMVWit9LXK3wvX5XNa5qz+TmydJkr4d8fk4slZtO6admnqafBmrmIDTcYAA1JjI84FxAy0ADvn52/diaDZ7S0PZ7Y5RHtcSxtD2qJQ4j2racobPaXENq2z4PGVqDvQqzp77Rk8j747H4oqt7V8JY5unw541lpFvfHf8fF6DA9Na8LLEU41Y75w+7qd9tj9DevUz5vHz/Z/DbvxWms+ye+Pr+702jOkOGxFlTnlm/wCVU9ifhufg2b1zxLw+p7Lz4O+9d19sd8fx+rqRmjSMrhnEyJmsZIY2xzB5TSLMpqMg+SZqTgVyRMJcB8kzCHTK5J0h0x8i0l0iuRaY5UiosWnO0loahiF97TUnumvZqL/ktZpTLNfCWWTDS/rQ8ppLobUjeWHmqi9ypaM/CWx+h016iJ8XBk6K0d9J281i8JVoyy1qcqb/AFxaT7nsfgdEWifByWpanrRpgGkDAAxcCGZ8QD0h+d7fuhi2RNDPaJIaoljcR7VEocR7VtLiG1bS0Gz2loD2VgPaXEez27+h+k9WlaFdupT2KW2pBd/4l6lxkmHldX2Xjyfexfdt7PKfo9fh9JRnFThJSjLWmndMr02ngX6WazNbRqW1DHouvVac9uk22KeMi950V6uvm5r9HbybEakXsZ0VzVt5uW2G1fGF5DXkxmpOmPkiYJ0x8i0iUB8k6Q6ZUWLTHKmVFkzDHKkXFi0wVsMpJxlFSi9sZJST8GXFymInxcTGdE8JUu+r6t8aUnD02ehtXPaPNzW6XHPlpyq/QaP8uvNfHCM/k0ax1M+cMZ6GPKzSq9CK34a1N/FGcPlcqOpj2InoreUtWfQ7FrZ1Uu6o/wB0ivT0Zz0eT8mL/SmN/Lj/AHaf1H6entL+ky+xu2Pz/b9qAADJLQKhjaGqEtDVtLQHtDQK2loZ7S0CiAJsBtrR+PqUJXhrg+3Tb1PnyfMJjbDP09M0anunyl6rB46FWOaD70+1F8Gjlvus6l4mXBbHbjaGx1jMpuz4rjiZLY2T6a0eEpnHWfJnp6VqR337zSvaGWnmxv0eO3jDcpaf9+F+52OmnbUx61duS/ZdZ9WW3S03Ql2m4vmrr0OvH2z09vW3H6fRy37LzR4d7ap4ujPs1IPlmSfkdmPrunyd1ckTPvcd+ly09ak/Bl6s64swmqXTHyTxQ6RXJPFDpFRYuKHRK5p0h0iosWkOkPkWkOkVyBdUHIPnp8e/UgMAATGEtDVCGgVtLQGloaolDQGloFJaGe0sDJgaqNadOWanJxly3rg+IpiJjUpvSt442jcO1hNPJ6q0XF+9DXHy2r1OW/Tz+GXnZegmO+k797q0MRCorwlGXc9a71uOO8TX1o04b47U9aNMtzGUixlYJcTGT2lwJlW1U6k49ico/DJoqmW+P1LTX3TMItSl/WrE++G3S0xiY/zMy4Tipeu07cfa3WU/HuPziJ/lzX7P6a34de5uUukc126cZfC3H6ndj+0OWPXxxPumY+rlv2RSfVvMe/v+jcpdIKD7SnDvWZeh6GLt/pretE1/Tf7fRx37JzR4an/PzblLG0J9mrBt7m8r8mehi7Q6bL6mSPjqfhPe48nR5qetSf8APczumdsWc3FDpj5JmqHTK5J4p6sfItPmJ8s/TzAgMCwBLQz2loFJaA0NDVEpaA0NApLQz2loFJYGQGLAQUdd1qa2Namg2N+TcoaRrw2VHJcKntrzev1ML9Pit4117u7+HPfpsNvGuvd3fw6FDTq2VabX6qbuv6X9Tkv0M/gt8fr/AA5b9BP4Lb9/1dPDYunU/wBualy2SXg9ZwZcV8fr11+3xcWTFenrRr9viznPKCaJMrC2NlYNnssobGycQ7j2yUq1SHYnKPwyaXka4s+XF/47zX3Si+LHk9esT+jdo6cxEdrjNfrjr81Y9HF231dPGYtH5x9NOLJ2Z09vDdfdP126FDpDTeqpCUHxj7Ufqetg+0GK3dlpNfd3x9f3cOXsjJHfS0T8mz/GcN+Z/wBJ/Q6/9a6L/wBnyt9HL/pvU/2fOPq+bRkcD7yYWmCZMABggBNAaWgPaGgVCGhqS0B7S0NSGgPaWgUmwzCAGIGIjQiNLXfetj3oCdLB6VnGyqe3Hj+NeO/xOHN0NLd9Puz8v4/T4OPL0lbd9O6fk7dCvGcc0Hdeq5NbjyMmO1LcbRqf88HnXpak6tGpZLGMynYsTsbFg2BYNjYyj2Nk4lbPaXED2nIPZ8nkKGMjLY0/E+smkw96+GY8W5TrJkTDCaM0ZCZTCgIAZACA0tAaGhqiUtAe0NDUhoFJaBSGBgDIAaAlIRKQiUhFLLQqyhLNB2fz5PiZ5MdcleNo3DO9K3jVodrB6UhLVP2JcfwP6HkZ+hvTvp96vz/n9Pg87L0tq99e+Pm6K/8ANHmy5DyiGwoi2NnlK2WxlHs9pcStjZZQ2e3yyx9y+2Z6WMqR2PMuEtf+SZpWWVsNLeWm/h9Lx2TTjzXtIznDPk5b9JP4Z26mHxMZq8JKXc9a8NxjNZjxcV8dqz96NM6kJnoMQAAmBpaA0NAqENDVCWgNDQ1IaBUJAwBgQNAUmhEtAlSZJLQks9DEzh2JNctq8mZZMOPJ69d/v8fFlfFS/rQ36WmJrtwjLmm4v9zhv2bSfVtMfP6OW3R1/DOvm26elqb2qUfJo5rdnZY8Jifkwt0mSPDUtujiac+zJN8Nj8mcuTBkx99q6j5MLY719aGaxkjZOIxsZRnt8nPvdPuAToANAK6d02mtjWpoBOp7pb2G0rUjqn7ceeqXn9TOcVZ8O5y5Okpbvr3T8nWwukKdTVGVpe7LVLw4mFsc18XDk6e9PGO5t3I0x0BAmBpYGhgaGhqhLBUJaA0NAogMgMADuIlJiJSYkqTEUrTEmYWmJOlJiLS4yEmYdXR+kWmoVHdbFJ7V38jzup6KJ+/jjv8AZ7fd+f7uHP034qfB1zy4hwCww+Sn6FxfdAXEysTxAFxAJ4gmhHtuYbSNSnqbzx4S2ruZnbFWfylzZOmpfvjul1sLpCFTUnll7ktT8HvMLY5r4+DhydPenjG49raUzPTHR3AJYjQxqhLA0sFIA0sFAAQGVwBpgSkxaJSkSWlqQkzC1ISdHcRaUmItMkZCRMOto3SFkoVHq/DLhyfI4Op6XlPOnj5x7f5/dwdR0255V+Dq9bH3o/1I8/0dv7Z+EuLjb2T8Hyg/ReL7kC4gieIApqATNQCJqZEzUBonQbeHx84ape3Hg+0u5mVsUT4d0sMnT0t3x3S6WHxsZ9l6/deqSMLUmPFx3w2r4w2VUM5hlxDYtDRNgEsDSwUlgaQUGAQxmLgNKTEWjTEWlpi0WlKROk6UpC0WlXEWlKQaTMMkZkpmF5gTp5I+t09wC4gEzUAXEwTNQCZqCJmoBM1AM5qZfPiRNQ2aWNnHb7S4/iRlbHEsbYKz4dzeo46Mt+vg9TMbY5hzXwTDYVVMzmrKayeYnRaJyFo9FcDS2MyuAIDIDMCNMAaYiUmTotLTEnR3FotGpBotKUhaLR5xaLTz9kfXaelzGURxcsolc4LKGj3BNC0ewLQImagEzUwTNQRE1AImgFiJoFwrSjsZlNEzSstmnjeJnOJlOH2M8cSnvMpxyynHMMiqkTVPE84tFoswaGizBo9DMGho8wtDR3DRaO4tEaYgpMWk6UmLRaO4tDQzD0WhmFoacHMfYcXRyPMLiezzC4ns1IXEbO6FxVyGonR8g4i0qLpcRaVygrC0rZCmoBE1MEzUETNACJoARNAqNRoicZTWJZViGZziROM/tBPoi9GPtAvRj0ZrEB6MejVHEE+jTONkjWJmiZouNRETVE1ZFImYTMKTJ0WlKQaLQzBoaRKoPicVT1qHwVwcm59ax5i4HzAj5ncD5C4aPkakLSuRqRPFXI1MU1PasxM1PYsieKouTiLS4uWUWj5QWUXE9lYniewTNDFiZoCsRNALETQAniYFxAFxAuLiWlKbJmhcYZI12iJxpnHDLHFGc4mc4lfaUL0ZeilEsSOMaoxMUq7Lii4onrWPifBjyn0bwfSFlBXpSygr0hWYKjJAux9yucDMxaOLmphpfJSkLSoudxaVFzUhcVRY8wpqrkeYniezzC4q2dxcRyGonirnIyoXE4uWQXFXMnEnifKCykzRWysROM9lYmcYFiZoATxAJ4mBcQRPEANABoAWgo958h6QAfpCBUZANXpCBUZCsNUZBlBcZCyhtpGUWYLjILsNNIvB3DSouaYtL5mLSouLhxPkdxcVcjuLifI8wuJ8hmJ4Hs8wuA5C5PBUWFkTNVcxkFNVRkLKRwVyhNiZoewTOMysRNACeAAuIAuIM9l8JzAz5kI+YsCouQ1RkALjIAVGQwVGQ7AuMgyjaRkLKG2kZRkDa4ylYGkZDBUXK49Li4uGlxYxaPkA0fIC0rkdxcT5C4uKuR3FxPkakTND5HmJ4K5HqImqovJOBPFcXgsouCuUJsRND2LC4GR6L875GA5ECtgFRJArZgOQBcWNAqLGCouAXGQwVFxYFxkFgXGQWBcZCcRtIyIlAqJa1ypaZTWMhZmPS+UKUxcVRY0xaPkYtHyAaVyAtHyFxTVUWO5PE4seYnirkpSJmp7NMmaqiT1E8T5MJ1Pz2JAlRIBWwCokgVsAezBWwB7MBsDVEncR7O4K2YLiSBUSBtIsBtIslobSLllHEtIuTgVtpGROQe2kXALiTTFpW1IQ2BHsCVFgLS4sBaVs0yJhUSdxaPaDV+f7AlQYlbAHEkCtgFRJgrZgNgD2BnswOJAHEgFbFwXFhca4sAXFgNcWIGnIxrrYgaxYmh7aRYmPbSJ2EwUUpCVBZhaM1IWgoR7AlxYXDStkN8FAEqDAECoAGYLqBKNAAMwgOTEZDODGogXBoFQAXAGuCQ1GJdTBqkbSvgmQ4aVIGqZDVCQM4hJwskzRMiDEt//Z"
                                class="w-24 h-24 object-cover mx-auto" style="border-radius: 2.1rem;" />
                            <div class="inline-block rounded-xl bg-pink-500 carmen text-white font-semibold px-3 w-full py-2 mt-4 text-xs text-center">Bookmark</div>
                        </div>
                        <div class="w-full bg-gray-800 bg-opacity-30 shadow-sm px-6 pt-6 pb-8 mt-0 md:mt-8" style="border-radius: 3rem;">
                            <img src="https://images.wallpapersden.com/image/download/macos-11-big-sur_bGZsbmmUmZqaraWkpJRqZmdlrWdtbWU.jpg" class="w-24 h-24 object-cover mx-auto" style="border-radius: 2.1rem;" />
                            <div class="inline-block rounded-xl bg-pink-500 carmen text-white font-semibold px-3 w-full py-2 mt-4 text-xs text-center">Bookmark</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="px-5 md:px-3 py-12 flex items-center text-sm bg-body">
            <div class="container mx-auto">
                <div class="w-full flex items-center justify-between">
                    <p class="text-white text-opacity-70">
                        © en-zo.dev
                    </p>
                    <div>
                        <div class="flex items-center justify-end">
                            <p class="text-white text-opacity-70">
                                Developed with <span class="text-pink-500 text-xs">♥</span> with by
                            </p>
                            <a href="https://en-zo.dev" target="_blank" class="text-white ml-1">en-zo.dev</a>
                        </div>
                        <div class="flex items-center justify-end text-xs mt-1">
                            <p class="text-white text-opacity-70">
                                Designed by
                            </p>
                            <a href="https://dribbble.com/alzea" target="_blank" class="text-white ml-1">Alzea Arafat</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>