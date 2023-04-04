import { prisma } from '../db'

class MediaFilesModule {
    createMediaFiles = async (payload) => {
        const response = prisma.MediaFiles.create({
            data: payload
        });
        return response;
    }
}

export default new MediaFilesModule;