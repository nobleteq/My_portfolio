import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { profile } from '../../data/profile';

interface ContactProps {
  id: string;
}

const Contact = ({ id }: ContactProps) => {
  const handleMailto = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = formData.get('subject') as string;
    const body = formData.get('message') as string;
    
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-textSecondary max-w-2xl mx-auto">
            I'm open to software development opportunities, freelance projects, and collaborations.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-text mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center space-x-4 p-4 bg-surfaceLight border border-border rounded-lg hover:border-primary transition-colors group"
                >
                  <div className="p-3 bg-surface rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary">Email</p>
                    <p className="text-text">{profile.email}</p>
                  </div>
                </a>

                {profile.location && (
                  <div className="flex items-center space-x-4 p-4 bg-surfaceLight border border-border rounded-lg">
                    <div className="p-3 bg-surface rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-textSecondary">Location</p>
                      <p className="text-text">{profile.location}</p>
                    </div>
                  </div>
                )}

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-surfaceLight border border-border rounded-lg hover:border-primary transition-colors group"
                >
                  <div className="p-3 bg-surface rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary">GitHub</p>
                    <p className="text-text">View my repositories</p>
                  </div>
                </a>

                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-surfaceLight border border-border rounded-lg hover:border-primary transition-colors group"
                  >
                    <div className="p-3 bg-surface rounded-lg group-hover:bg-primary/10 transition-colors">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-textSecondary">LinkedIn</p>
                      <p className="text-text">Connect with me</p>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-text mb-6">Send a Message</h3>
            <form onSubmit={handleMailto} className="space-y-6">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project inquiry, collaboration, etc."
                  className="w-full px-4 py-3 bg-surfaceLight border border-border rounded-lg text-text placeholder-textSecondary focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 bg-surfaceLight border border-border rounded-lg text-text placeholder-textSecondary focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3 text-sm font-medium text-background bg-primary rounded-lg hover:bg-primaryHover transition-colors"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
              <p className="text-xs text-textSecondary text-center">
                This will open your default email application with the message pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
