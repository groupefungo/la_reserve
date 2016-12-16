class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    email_to = 'eric@entreprisesofarrell.com'
    subject = "Nouvelle candidature soumise"

    @contact = ContactForm.new(params[:contact_form])
    @contact.email_to = email_to
    @contact.subject = subject
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = 'Merci pour votre message. Nous vous contacterons dans les plus brefs délais!'
      respond_to do |format|
        format.html
        format.js
      end
    else
      flash.now[:error] = "Impossible d'envoyer le message."
      render :new
    end
  end
end