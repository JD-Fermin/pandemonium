class Server < ApplicationRecord
    validates :name, :owner_id, presence: true
    validates :name, length: { minimum: 3, maximum: 40 }
    validates :description, length: { maximum: 75 }
    # validates :isPrivate, inclusion: {in: [true, false]}

    belongs_to :owner, class_name: :User, foreign_key: :owner_id
    has_many :channels, class_name: :Channel, foreign_key: :server_id, dependent: :destroy
    has_many :memberships, class_name: :Membership, foreign_key: :server_id, dependent: :destroy
    has_many :members, through: :memberships, source: :user
    
    
    def transfer_ownership(user)
        self.owner_id = user
        self.save!

    end

    
end
