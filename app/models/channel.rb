class Channel < ApplicationRecord
    validates :name, presence: true, length: { maximum: 20 }
    validates :description, length: { maximum: 75 }

    has_many :messages, class_name: :Message, foreign_key: :channel_id, dependent: :destroy
    
end
