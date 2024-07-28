export function displayContact() {
    document.getElementById("title").innerHTML = `<h1>Contact</h1>`
    document.getElementById("text").innerHTML =`<p>If you'd like to get in touch, feel free to reach out through any of the following methods (due to too much cold calling, please leave me a message so that I can get back to you) :</p>
        
                                                <p>Email : <a href="mailto:olivia.bergalia@gmail.com"><strong>olivia.bergalia@gmail.com</strong></a></p>
                                                <p>Phone : <a href="tel:+33621843088"><strong>06 21 84 30 88</strong></a></p>
                                                <p>LinkedIn : <a href="https://www.linkedin.com/in/olivia-bergaglia-438684302/" target="_blank"><strong>linkedin.com/in/oliviabergaglia</strong></a></p>
                                                <p>GitHub : <a href="https://github.com/olivia-brg" target="_blank"><strong>github.com/olivia-brg</strong></a></p>
                                                
                                                <form action="https://formspree.io/your-email" method="POST">
                                                    <label for="name">Name :</label>
                                                    <input type="text" id="name" name="name" required><br>
                                                    
                                                    <label for="email">Email :</label>
                                                    <input type="email" id="email" name="email" required><br>
                                                    
                                                    <label for="message">Message :</label><br>
                                                    <textarea id="message" name="message" rows="5" required></textarea>
                                                    
                                                    <button type="submit">Send</button>
                                                </form>`
}