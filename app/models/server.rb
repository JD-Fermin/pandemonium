class Server < ApplicationRecord
    validates :name, :owner_id, presence: true
    validates :name, uniqueness: true, length: { minimum: 3, maximum: 40 }
    validates :description, length: { maximum: 75 }

    belongs_to :owner, class_name: :User, foreign_key: :owner_id
end
