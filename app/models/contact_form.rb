class ContactForm < MailForm::Base
  attribute :firstname,      :validate => true
  attribute :lastname,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :file,      :attachment => true
  attribute :message
  attribute :email_to
  attribute :subject

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
        :subject => "#{subject}",
        :to => "#{email_to}",
        :from => %("#{firstname} #{lastname}" <#{email}>)
    }
  end
end