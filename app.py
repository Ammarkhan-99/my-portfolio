from flask import Flask, render_template, request, jsonify, flash
from flask_mail import Mail, Message
import os

app = Flask(__name__)

# Email configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'ammaroofficial99@gmail.com'
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD', 'ckuvvgrbepovhrey')  # Gmail App Password
app.config['MAIL_DEFAULT_SENDER'] = 'ammaroofficial99@gmail.com'

mail = Mail(app)

# Portfolio data
portfolio_projects = [
    {
        'id': 1,
        'title': 'E-Commerce Website',
        'description': 'A modern e-commerce platform with shopping cart, payment integration, and user authentication. Built with React and Node.js.',
        'image': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        'url': 'https://example.com/project1'
    },
    {
        'id': 2,
        'title': 'Task Management App',
        'description': 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        'image': 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
        'url': 'https://example.com/project2'
    },
    {
        'id': 3,
        'title': 'Weather Dashboard',
        'description': 'Interactive weather dashboard with location-based forecasts, weather maps, and detailed analytics. Uses OpenWeather API.',
        'image': 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop',
        'url': 'https://example.com/project3'
    },
    {
        'id': 4,
        'title': 'Social Media Platform',
        'description': 'A full-featured social media platform with posts, comments, likes, and real-time messaging. Built with MERN stack.',
        'image': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
        'url': 'https://example.com/project4'
    },
    {
        'id': 5,
        'title': 'Food Delivery App',
        'description': 'Mobile-first food delivery application with restaurant listings, order tracking, and payment processing. React Native and Firebase.',
        'image': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
        'url': 'https://example.com/project5'
    },
    {
        'id': 6,
        'title': 'Learning Management System',
        'description': 'Comprehensive LMS platform with video courses, quizzes, progress tracking, and certificate generation for online education.',
        'image': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
        'url': 'https://example.com/project6'
    }
]

@app.route('/')
def home():
    return render_template('index.html', projects=portfolio_projects)

@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        
        if not name or not email or not message:
            return jsonify({'success': False, 'message': 'All fields are required'}), 400
        
        # Create email message
        msg = Message(
            subject=f'Portfolio Contact Form - Message from {name}',
            recipients=['ammaroofficial99@gmail.com'],
            body=f'''
Name: {name}
Email: {email}

Message:
{message}

---
This message was sent from your portfolio website contact form.
            ''',
            reply_to=email
        )
        
        # Send email
        mail.send(msg)
        
        return jsonify({'success': True, 'message': 'Message sent successfully!'}), 200
        
    except Exception as e:
        return jsonify({'success': False, 'message': f'Error sending email: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

