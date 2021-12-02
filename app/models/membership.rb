class Membership < ApplicationRecord
    validates :user_id, :server_id, presence: true

    belongs_to :user, class_name: :User, foreign_key: :user_id
    belongs_to :server, class_name: :Server, foreign_key: :server_id
end
