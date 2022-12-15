import { Notification as PrismaNotificationData } from '@prisma/client';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
      canceledAt: notification.canceledAt,
    };
  }

  static toDomain(
    prismaNotificationData: PrismaNotificationData,
  ): Notification {
    return new Notification(
      {
        category: prismaNotificationData.category,
        content: new Content(prismaNotificationData.content),
        recipientId: prismaNotificationData.recipientId,
        readAt: prismaNotificationData.readAt,
        canceledAt: prismaNotificationData.canceledAt,
        createdAt: prismaNotificationData.createdAt,
      },
      prismaNotificationData.id,
    );
  }
}
