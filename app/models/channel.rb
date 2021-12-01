class Channel < ApplicationRecord
    validates :name, presence: true, length: { maximum: 20 }
    validates :description, length: { maximum: 75 }
    validates :server_id, presence: true

    has_many :messages, class_name: :Message, foreign_key: :channel_id, dependent: :destroy
    belongs_to :server, class_name: :Server, foreign_key: :server_id
end
