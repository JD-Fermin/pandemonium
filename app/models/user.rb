class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :messages, class_name: :Message, foreign_key: :author_id

  has_many :owned_servers, class_name: :Server, foreign_key: :owner_id

  has_many :memberships, class_name: :Membership, foreign_key: :user_id

  has_many :joined_servers, through: :memberships, source: :server

  has_many :direct_messages, class_name: :DirectMessage, foreign_key: :user_id
  has_many :user_conversations, class_name: :UserConversation, foreign_key: :user_id

  has_may :conversations, through: :user_conversations, source: :conversation

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_valid_password?(password)
      return user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_valid_password?(password)
    pw_obj = BCrypt::Password.new(password_digest)
    pw_obj.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
